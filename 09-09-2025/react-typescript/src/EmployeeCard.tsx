interface UserProps {
  name: string,
  age: number
}

export interface EmployeeProps extends UserProps {
  position: 'intern' | 'part-time' | 'full-time' | 'contractor'
}

const EmployeeCard: React.FC<EmployeeProps> = ({ name, age, position }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Position: {position}</p>
    </div>
  );
};

export default EmployeeCard