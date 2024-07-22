export interface ProPathTypes {
  pathName?: string;
}

const ProPath = ({ pathName }: ProPathTypes) => {
  const splitPath = pathName?.split("");

  return <p>{pathName}</p>;
};

export default ProPath;
