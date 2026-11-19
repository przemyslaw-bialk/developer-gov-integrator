type Props = {
  text: string;
};

const ErrorInfo = ({ text }: Props) => {
  return <p className="mt-1 text-sm text-red-500">{text}</p>;
};

export default ErrorInfo;
