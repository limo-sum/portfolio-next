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
  switch (lines) {
    case 1:
      return (
        <Styled.SkeletonFrame>
          <Skeleton
            variant="text"
            sx={{ fontSize: 16, width: 320, bgcolor: theme.colors.background }}
          />
        </Styled.SkeletonFrame>
      );
    case 2:
      return (
        <Styled.SkeletonFrame>
          <Skeleton
            variant="text"
            sx={{ fontSize: 16, width: 270, bgcolor: theme.colors.background }}
          />
          <Skeleton
            variant="text"
            sx={{ fontSize: 16, width: 320, bgcolor: theme.colors.background }}
          />
        </Styled.SkeletonFrame>
      );
    default:
      return (
        <Styled.SkeletonFrame>
          <Skeleton
            variant="text"
            sx={{ fontSize: 16, width: 200, bgcolor: theme.colors.background }}
          />
          <Skeleton
            variant="text"
            sx={{ fontSize: 28, width: 160, bgcolor: theme.colors.background }}
          />
          {[270, 230, 290, 320].map((ar: number) => {
            return (
              <Skeleton
                key={ar}
                variant="text"
                sx={{
                  fontSize: 16,
                  width: ar,
                  bgcolor: theme.colors.background,
                }}
              />
            );
          })}
        </Styled.SkeletonFrame>
      );
  }
});

export default SkeletonContents;
