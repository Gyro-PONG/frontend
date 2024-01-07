import ReactDom from 'react-dom';

interface Props {
  children: React.ReactNode;
}

const ModalPortal = ({ children }: Props) => {
  return ReactDom.createPortal(children, document.getElementById('modal')!);
};

export default ModalPortal;
