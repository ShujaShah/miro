interface userIdProps {
  params: {
    userId: string;
  };
}

const page = ({ params }: userIdProps) => {
  return (
    <div>
      <p>userId: {params.userId}</p>
    </div>
  );
};

export default page;
