import { getIntro } from "@/fetch";
import { useEffect, useState } from "react";
import * as Styled from "./common/styled";
import { observer } from "mobx-react";
import useStore from "@/store";
import { Skeleton } from "@mui/material";
import theme from "@/styles/theme";
import SkeletonContents from "./common/skeleton";
import Image from "next/image";
import me from "../images/me.png";

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

  return (
    <Styled.FrameComp title={"INTRO"} id={"INTRO"}>
      <Styled.FlexFrame style={{ justifyContent: "space-between" }}>
        <div>
          <Styled.FrameH1>
            LEE JIYUN
            <br />
            <Styled.Period
              style={{ fontSize: 24, fontWeight: "lighter", lineHeight: 1 }}
            >
              FRONTEND DEVELOPER
            </Styled.Period>
          </Styled.FrameH1>
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
                      bgcolor: theme.colors.gray9,
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
        </div>
        <br />
        <Image
          src={me}
          alt="profile"
          width={250}
          height={250}
          priority={true}
          style={{ borderRadius: "50%" }}
        />
      </Styled.FlexFrame>
    </Styled.FrameComp>
  );
});

export default Intro;
