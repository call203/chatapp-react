import { CreateConversationForm } from '../forms/CreateConversationForm'
import closeImg from '../../Assets/CloseImg.png'
import { Dispatch, FC, createRef, useState } from 'react'
import { ModalBody, ModalContainer, ModalHeader } from '.'

type Props = {
  setShowModal: Dispatch<React.SetStateAction<boolean>>
}

export const CreateConversationModal: FC<Props> = ({ setShowModal }) => {
  const ref = createRef<HTMLDivElement>()

  const handleOverlayClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    const { current } = ref
    if (current === e.target) {
      setShowModal(false)
    }
  }

  return (
    <ModalContainer ref={ref} onClick={handleOverlayClick}>
      <ModalHeader>
        Create a Conversation
        <button onClick={() => setShowModal(false)}>
          <img src={closeImg} alt="add chat" className="w-7 h-7" />
        </button>
      </ModalHeader>
      <ModalBody>
        <CreateConversationForm setShowmodal={setShowModal} />
      </ModalBody>
    </ModalContainer>
  )
}
