export type CreateArrayWithLengthX<
  LENGTH extends number,
  ACC extends unknown[] = [],
> = ACC['length'] extends LENGTH
  ? ACC
  : CreateArrayWithLengthX<LENGTH, [...ACC, 1]>

export type NumericRange<
  START_ARR extends number[],
  END extends number,
  ACC extends number=never>
  = START_ARR['length'] extends END
    ? ACC | END
    : NumericRange<[...START_ARR, 1], END, ACC | START_ARR['length']>

type TWENTY_TO_FORTY = NumericRange<CreateArrayWithLengthX<20>, 40>
