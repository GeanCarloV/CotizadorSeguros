import React from 'react';
import styled from '@emotion/styled';
import {TransitionGroup, CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';


const Mensaje = styled.p`
    background-color: rgb(127, 224, 237);
    margin-top: 2rem; 
    padding: 1rem; 
    text-align: center; 
`;

const ResutladoCotizacion = styled.div`
    text-align: center; 
    padding: .5rem; 
    border: 1px solid #26C6DA; 
    background-color: rgb(127, 224, 237);
    margin-top: 1rem;
    position: relative;
`;

const TextoCotizacion = styled.p`
    color: #00838F; 
    padding: 1rem; 
    text-transform: uppercase;
    font-weight: bold; 
    margin:0; 
`;

const Resultado = ({contizacion}) => {
    
    return ( 
        (contizacion === 0) 
        ? <Mensaje>Elige marca, año y tipo de seguro </Mensaje> 
        : 
            (
            <ResutladoCotizacion>
                <TransitionGroup
                    component="span"
                    className="resultado"
                >
                    <CSSTransition
                        classNames="resultado"
                        key={contizacion}
                        timeout={{enter: 700, exit: 700}}
                    >
                        <TextoCotizacion>  El total es:  $ <span> {contizacion} </span></TextoCotizacion>
                    </CSSTransition>
                </TransitionGroup>
            </ResutladoCotizacion>
            )
    )
}
 
Resultado.propTypes = {
    contizacion: PropTypes.number.isRequired
}

export default Resultado;