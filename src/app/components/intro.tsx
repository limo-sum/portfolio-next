import { getIntro } from "@/fetch";
import Frame from "./common/frame";
import { ReactElement, useEffect, useState } from "react";
import * as Styled from "./common/styled";
import { observer } from "mobx-react";
import useStore from "@/store";
import { Skeleton } from "@mui/material";
import theme from "@/styles/theme";
import SkeletonContents from "./common/skeleton";

interface IntroType {
  email: string;
  github: string;
  introduction: string[];
  name: string;
  skills: string[];
}

const Intro = observer(() => {
  const { loading, setLoading } = useStore().globalStore;
  const [intro, setIntro] = useState<IntroType | null>(null);

  useEffect(() => {
    onload();
  }, []);

  const onload = async () => {
    setLoading(true);
    const i = await getIntro();
    setIntro(i);
    setLoading(false);
  };

  const props: { loading: boolean; title: string; content: ReactElement } = {
    loading,
    title: "INTRO",
    content: (
      <Styled.ContentFrame>
        {loading ? (
          <SkeletonContents lines={2} />
        ) : (
          <Styled.SkeletonFrame>
            {intro?.introduction?.map((sp: string) => {
              return <li key={sp}>{sp}</li>;
            })}
          </Styled.SkeletonFrame>
        )}
        <br />
        <Styled.FlexFrame>
          {loading ? (
            <Styled.SkeletonFrame>
              <Skeleton
                variant="text"
                sx={{
                  fontSize: 23,
                  width: 50,
                  bgcolor: theme.colors.background,
                }}
              />
            </Styled.SkeletonFrame>
          ) : (
            <Styled.Tags>
              {intro?.skills?.map((skill: string) => {
                return <li key={skill}>{skill}</li>;
              })}
            </Styled.Tags>
          )}
        </Styled.FlexFrame>
      </Styled.ContentFrame>
    ) as ReactElement,
  };
  return <Frame {...props} />;
});

export default Intro;
