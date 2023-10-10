import { styled } from "styled-components";
import * as Styled from "./styled";
import { observer } from "mobx-react";
import { Skeleton } from "@mui/material";
import theme from "@/styles/theme";
import { FC } from "react";

type Props = {
  lines?: number;
};

const SkeletonContents: FC<Props> = observer(({ lines }) => {
  const sx = { fontSize: 16, bgcolor: theme.colors.gray9 };
  switch (lines) {
    case 1:
      return (
        <Styled.SkeletonFrame>
          <Skeleton variant="text" sx={{ ...sx, width: 320 }} />
        </Styled.SkeletonFrame>
      );
    case 2:
      return (
        <Styled.SkeletonFrame>
          <Skeleton variant="text" sx={{ ...sx, width: 270 }} />
          <Skeleton variant="text" sx={{ ...sx, width: 320 }} />
        </Styled.SkeletonFrame>
      );
    default:
      return (
        <Styled.SkeletonFrame>
          <Skeleton variant="text" sx={{ ...sx, width: 200 }} />
          <Skeleton variant="text" sx={{ ...sx, width: 160, fontSize: 28 }} />
          {[270, 230, 290, 320].map((ar: number) => {
            return (
              <Skeleton
                key={ar}
                variant="text"
                sx={{
                  ...sx,
                  width: ar,
                }}
              />
            );
          })}
        </Styled.SkeletonFrame>
      );
  }
});

export default SkeletonContents;
