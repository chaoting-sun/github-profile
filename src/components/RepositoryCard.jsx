import styled from "styled-components";
import starIconURL from "/assets/Star.svg";
import forkIconURL from "/assets/Nesting.svg";
import chieldAltIconURL from "/assets/Chield_alt.svg";

import calculateDayRelativeToToday from "../utils/dayRelativeToToday";

const Card = styled.div`
  height: fit-content;
  border-radius: 10px;
  background: var(--repo-background-color);
  display: inline-block;
  margin: 15px;

  cursor: pointer;

  &:hover {
    background: var(--repo-background-color-hover);
  }

  > * {
    color: var(--paragraph-color);
  }
`;

const CardTitle = styled.div`
  color: var(--title-color);
  margin: 20px 15px 10px 20px;
  font-weight: 500;
  font-size: 1.1rem;
`;

const CardDescription = styled.div`
  margin: 10px 20px;
  font-size: 0.9rem;
`;

const CardTrend = styled.div`
  margin: 10px 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const TrendIcon = styled.img`
  margin-right: 6px;
`;

const TrendValue = styled.span`
  margin-right: 11px;
`;

const UpdatedTime = styled.div`
  font-size: 0.7rem;
  margin-left: 11px;
`;

const RepositoryCard = ({ repo, repoIndex, handleClickCard }) => {
  return (
    <Card onClick={() => handleClickCard(repoIndex)}>
      <CardTitle>{repo.name}</CardTitle>
      <CardDescription>{repo.description}</CardDescription>
      <CardTrend>
        {repo.license ? (
          <>
            <TrendIcon src={chieldAltIconURL} />
            <TrendValue>{repo.license}</TrendValue>
          </>
        ) : null}
        <TrendIcon src={forkIconURL} />
        <TrendValue>{repo.forks}</TrendValue>
        <TrendIcon src={starIconURL} />
        <TrendValue>{repo.stars}</TrendValue>
        <UpdatedTime>
          updated {calculateDayRelativeToToday(repo.updatedAt)} days ago
        </UpdatedTime>
      </CardTrend>
    </Card>
  );
};

export default RepositoryCard;
