import { getEducations } from "@/fetch";
import Frame from "./common/frame";
import { ReactElement, useEffect, useState } from "react";
import * as Styled from "./common/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCircleUser } from "@fortawesome/free-solid-svg-icons";
import theme from "@/styles/theme";
import { observer } from "mobx-react";
import useStore from "@/store";
import SkeletonContents from "./common/skeleton";

const Educations = observer(() => {
  const { loading } = useStore().globalStore;
  const [educations, setEducations] = useState<any[]>([]);
  useEffect(() => {
    onload();
  }, []);
  const onload = async () => {
    const i = await getEducations();
    setEducations(i);
  };

  const props: { title: string; content: ReactElement } = {
    title: "EDUCATIONS",
    content: (
      <Styled.ContentFrame>
        {loading ? (
          <SkeletonContents />
        ) : (
          educations?.map((p: any) => {
            return (
              <Styled.ElementFrame key={p.at}>
                <Styled.Period>
                  {p?.start_from} ~ {p?.end_to}
                </Styled.Period>
                <Styled.TitleH1>{p?.at}</Styled.TitleH1>
                <Styled.ContentWithIcon>
                  <FontAwesomeIcon
                    icon={faCircleUser}
                    color={theme.colors.background}
                  />
                  <Styled.ContentSpan>{p.title}</Styled.ContentSpan>
                </Styled.ContentWithIcon>
                {p?.skills?.map((s: string) => {
                  return (
                    <Styled.ContentWithIcon key={s}>
                      <FontAwesomeIcon
                        icon={faCheck}
                        color={theme.colors.background}
                      />
                      <Styled.ContentSpan>{s}</Styled.ContentSpan>
                    </Styled.ContentWithIcon>
                  );
                })}
              </Styled.ElementFrame>
            );
          })
        )}
      </Styled.ContentFrame>
    ) as ReactElement,
  };
  return <Frame {...props} />;
});

export default Educations;
