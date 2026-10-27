export interface PreloadStats {
  loaded: number;
  total: number;
  percent: number;
  phase: string;
  isComplete: boolean;
}

type Listener = (stats: PreloadStats) => void;

class PreloadManager {
  private total = 0;
  private loaded = 0;
  private phase = 'Initializing portfolio assets...';
  private isComplete = false;
  private listeners: Set<Listener> = new Set();

  register(count: number = 1, phase?: string) {
    this.total += count;
    if (phase && !this.isComplete) {
      this.phase = phase;
    }
    this.notify();
  }

  onAssetLoaded(count: number = 1, phase?: string) {
    this.loaded = Math.min(this.loaded + count, this.total);
    if (phase && !this.isComplete) {
      this.phase = phase;
    }
    if (this.total > 0 && this.loaded >= this.total) {
      this.isComplete = true;
      this.phase = 'Ready';
    }
    this.notify();
  }

  getStats(): PreloadStats {
    const percent = this.total > 0 ? Math.min(100, Math.round((this.loaded / this.total) * 100)) : 0;
    return {
      loaded: this.loaded,
      total: this.total,
      percent,
      phase: this.phase,
      isComplete: this.isComplete,
    };
  }

  subscribe(listener: Listener): () => void {
    this.listeners.add(listener);
    listener(this.getStats());
    return () => {
      this.listeners.delete(listener);
    };
  }

  completeNow() {
    this.loaded = this.total;
    this.isComplete = true;
    this.phase = 'Ready';
    this.notify();
  }

  private notify() {
    const stats = this.getStats();
    for (const listener of this.listeners) {
      listener(stats);
    }
  }
}

export const preloadManager = new PreloadManager();
