type Props = {
  name: string;
};

const Profile = ({ name }: Props) => {
  return (
    <div>
      Hey, I'm {name}. This is a profile component. It is literally worthless
      and I am not sure why I made it.
    </div>
  );
};

export default Profile;
