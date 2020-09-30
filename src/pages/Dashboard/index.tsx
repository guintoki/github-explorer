import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositiories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />{' '}
      <Title>Explore repositórios no github</Title>
      <Form>
        <input placeholder="Digite o nome do seu repositório" />
        <button type="submit">Pesquisar</button>
      </Form>
      <Repositiories>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/55093125?s=460&u=b241d3376c3c7ddaa21421eb4bcd255962486339&v=4"
            alt="Guilherme Vilas Boas"
          />
          <div>
            <strong>guintoki/backend</strong>
            <p>Backend criado para backs</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/55093125?s=460&u=b241d3376c3c7ddaa21421eb4bcd255962486339&v=4"
            alt="Guilherme Vilas Boas"
          />
          <div>
            <strong>guintoki/backend</strong>
            <p>Backend criado para backs</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/55093125?s=460&u=b241d3376c3c7ddaa21421eb4bcd255962486339&v=4"
            alt="Guilherme Vilas Boas"
          />
          <div>
            <strong>guintoki/backend</strong>
            <p>Backend criado para backs</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositiories>
    </>
  );
};

export default Dashboard;
