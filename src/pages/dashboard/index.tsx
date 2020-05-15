import React from 'react';

import { FiChevronRight } from 'react-icons/fi';
import logoImage from '../../assets/logo-github.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImage} alt="Github Explorer" />
      <Title>Explore repositórios no GitHub</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/25849916?v=4"
            alt="João Nascimento"
          />
          <div>
            <strong>netCore/AppBuildingWithNetCore2.0</strong>
            <p>Application builder with net core 2.0 and dapper</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
