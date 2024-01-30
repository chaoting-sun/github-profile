import styled from "styled-components";
import { starIconURL, nestingIconURL, chieldAltIconURL } from "../../public/assets";
import calculateDayRelativeToToday from "../utils/dayRelativeToToday";

const ContentColor = `
  color: #8F9BAF;
`;

const Card = styled.div`
  height: fit-content;
  border-radius: 10px;
  background: linear-gradient(90deg, #12172a 0%, #1c1b47 100%);
  display: inline-block;
  margin: 15px;

  cursor: pointer
`;

const CardTitle = styled.div`
  color: #c1c9d5;
  margin: 20px 15px 10px 20px;
  font-weight: 500;
  font-size: 1.1rem;
`;

const CardDescription = styled.div`
  ${ContentColor}
  margin: 10px 20px;
  font-size: 0.9rem;
`;

const CardTrend = styled.div`
  ${ContentColor}
  margin: 10px 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const TrendIcon = styled.img`
  ${ContentColor}
  margin-right: 6px;
`;

const TrendValue = styled.span`
  ${ContentColor}
  margin-right: 11px;
`;

const UpdatedTime = styled.div`
  ${ContentColor}
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
        <TrendIcon src={nestingIconURL} />
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
