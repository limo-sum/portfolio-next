import { getWorks } from "@/fetch";
import Frame from "./common/frame";
import { ReactElement, useEffect, useState } from "react";
import * as Styled from "./common/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCircleUser } from "@fortawesome/free-solid-svg-icons";
import theme from "@/styles/theme";
import { periodGenerator } from "./common/generator";
import { observer } from "mobx-react";
import useStore from "@/store";
import SkeletonContents from "./common/skeleton";

const Works = observer(() => {
  const { loading } = useStore().globalStore;
  const [works, setWorks] = useState<any[]>([]);
  useEffect(() => {
    onload();
  }, []);
  const onload = async () => {
    const i = await getWorks();
    setWorks(i);
  };

  const props: { title: string; content: ReactElement } = {
    title: "WORKS",
    content: (
      <Styled.ContentFrame>
        {loading ? (
          <SkeletonContents />
        ) : (
          works?.map((p: any) => {
            return (
              <Styled.ElementFrame key={p.at}>
                <Styled.Period>
                  {periodGenerator(p?.start_from, p?.end_to)}
                </Styled.Period>

                <Styled.TitleH1>{p?.at}</Styled.TitleH1>
                <Styled.ContentWithIcon>
                  <FontAwesomeIcon
                    icon={faCircleUser}
                    color={theme.colors.background}
                  />
                  <Styled.ContentSpan>{p?.position}</Styled.ContentSpan>
                </Styled.ContentWithIcon>
                {p?.descriptions?.map((d: string) => {
                  return (
                    <Styled.ContentWithIcon key={d}>
                      <FontAwesomeIcon
                        icon={faCheck}
                        color={theme.colors.background}
                      />
                      <Styled.ContentSpan>{d}</Styled.ContentSpan>
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

export default Works;
