class LuckyDraw {
    amIlucky(): boolean {
        return Math.random() >= 0.5;
    }
}

export const Troller = new LuckyDraw();