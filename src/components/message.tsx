import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components'

type Props = {
    content: {
        message: string,
        type: string
    },
    duration?: number,
    onClose?: () => void
}

let timer: number

const Message = ({ content, duration = 3000, onClose }: Props) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setVisible(true);
        timer = setTimeout(() => {
            setVisible(false);
            onClose && onClose();
        }, duration);

        return () => {
            clearTimeout(timer);
        };
    }, [content]);


    return createPortal(
        <Content visable={visible ? "1" : "0"} type={content.type}>
            {content.message}
        </Content>,
        document.body
    );
};

export default Message

const Content = styled.div<{
    visable: string,
    type: string
}>`
  position: fixed;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  padding: 0.5rem;
  border-radius: 4px;
  font-size: 1rem;
  color: #fff;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  opacity: ${(props: { visable: any; }) => props.visable};
  background-color: ${(props: { type: string; }) => props.type === "success" ? "#52c41a" : "#f5222d"};
`