import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Header, RepositoryInfo, Issues } from './styles';
import logoImage from '../../assets/logo-github.svg';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  return (
    <>
      <Header>
        <img src={logoImage} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={20} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img
            src="https://avatars0.githubusercontent.com/u/25849916?v=4"
            alt="joaoBrRj91"
          />
          <div>
            <strong>joaobrrj91/netCore20</strong>
            <p>descrição do repositorio</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1800</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>48</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>67</strong>
            <span>Issues</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link key="testeId" to="GotoPage">
          <div>
            <strong>Mudança no dominio</strong>
            <p>Utilização de Domain Notification</p>
          </div>

          <FiChevronRight size={30} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
