// eslint-disable-next-line @typescript-eslint/no-explicit-any
let smoother: any = null;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const setSmoother = (value: any) => {
  smoother = value;
};

export const getSmoother = () => smoother;
