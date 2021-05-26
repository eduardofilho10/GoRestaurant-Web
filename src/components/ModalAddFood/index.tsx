import React, { useRef, useCallback } from 'react';

import { FiCheckSquare } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';

interface IFoodPlate {
  id: number;
  title: string;
  image_url: string;
  price: string;
  available: boolean;
}

interface ICreateFoodData {
  title: string;
  image_url: string;
  price: string;
}

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleAddFood: (food: Omit<IFoodPlate, 'id' | 'available'>) => void;
}

const ModalAddFood: React.FC<IModalProps> = ({
  isOpen,
  setIsOpen,
  handleAddFood,
}) => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async (data: ICreateFoodData) => {
      // TODO ADD A NEW FOOD AND CLOSE THE MODAL
      handleAddFood(data);

      setIsOpen();
    },
    [handleAddFood, setIsOpen],
  );

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Novo Produto</h1>
        <Input name="title" placeholder="Ex: nome do produto" />
        <Input name="image_url" placeholder="Cole o link aqui" />

        <Input name="price" placeholder="Ex: 19.90" />

        <button type="submit" data-testid="add-food-button">
          <p className="text">Adicionar Produto</p>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
};

export default ModalAddFood;
