class Component<Props = void> {
    protected props: Props

    public constructor(props: Props) {
        this.props = props
    }

    public setProps(newProps: Props): void {
        this.props = newProps
    }

    public draw(ctx: CanvasRenderingContext2D): void {}
}

export default Component