import { QRCodeSVG } from 'qrcode.react';

import theme from 'src/styles/theme';

interface Props {
  link: string;
  size: number;
}

const Qrcode = ({ link, size }: Props) => {
  return (
    <QRCodeSVG
      value={link}
      size={size}
      bgColor={theme.colors.black}
      fgColor={theme.colors.green}
    />
  );
};

export default Qrcode;
