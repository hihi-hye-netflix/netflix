import styled from 'styled-components';

type Card = {
  image: string;
  title: string;
};

const RoundCard = ({ image, title }: Card) => {
  return (
    <CardContainer>
      <Image
        src={image}
        alt={title}
      />
    </CardContainer>
  );
};

export default RoundCard;

const CardContainer = styled.div`
  width: 6.375rem;
  height: 6.375rem;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
  margin: 0.3rem;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
