import { getProjects } from "@/fetch";
import Frame from "./common/frame";
import { ReactElement, useEffect, useState } from "react";
import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faLightbulb } from "@fortawesome/free-solid-svg-icons";
import * as Styled from "./common/styled";
import { theme } from "../../styles/theme";
import { observer } from "mobx-react";
import useStore from "@/store";
import SkeletonContents from "./common/skeleton";

const Projects = observer(() => {
  const { loading } = useStore().globalStore;
  const [projects, setProjects] = useState<any[]>([]);
  useEffect(() => {
    onload();
  }, []);
  const onload = async () => {
    const i = await getProjects();
    setProjects(i);
  };

  const props: { title: string; content: ReactElement } = {
    title: "PROJECTS",
    content: (
      <Styled.ContentFrame>
        {loading ? (
          <SkeletonContents />
        ) : (
          projects?.map((p: any) => {
            return (
              <Styled.ElementFrame key={p.title}>
                <Styled.Period>
                  {p?.start_from} ~ {p?.end_to}
                </Styled.Period>
                <Styled.TitleH1>{p?.title}</Styled.TitleH1>
                <Styled.Tags>
                  {p?.skills?.map((s: string) => {
                    return <li key={s}>{s}</li>;
                  })}
                </Styled.Tags>
                <Styled.ContentWithIcon>
                  <FontAwesomeIcon
                    icon={faLightbulb}
                    color={theme.colors.lake}
                  />
                  <Styled.ContentSpan>{p?.introduction}</Styled.ContentSpan>
                </Styled.ContentWithIcon>
                {p?.contents?.map(
                  (c: { position: string; outputs: string[] }) => {
                    return (
                      <ProjectContent key={c.position}>
                        {c.outputs.map((o: string) => {
                          return (
                            <Styled.ContentWithIcon key={o}>
                              <FontAwesomeIcon
                                icon={faCheck}
                                color={theme.colors.lake}
                              />
                              <Styled.ContentSpan>{o}</Styled.ContentSpan>
                            </Styled.ContentWithIcon>
                          );
                        })}
                      </ProjectContent>
                    );
                  }
                )}
              </Styled.ElementFrame>
            );
          })
        )}
      </Styled.ContentFrame>
    ) as ReactElement,
  };
  return <Frame {...props} />;
});

export default Projects;

const ProjectContent = styled.div``;
