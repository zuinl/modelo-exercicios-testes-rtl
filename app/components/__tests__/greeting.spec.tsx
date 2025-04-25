import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event"
import { Greeting } from "../greeting";
import { keyboard, pointer, tab } from "@testing-library/user-event/dist/cjs/setup/directApi.js";

const user = userEvent.setup();
const nomes = ["Alice", "Bruno", "Caio", "Diego", "Eduarda"];

describe("component: Greeting", () => {
    const onImparNomeClickMk = jest.fn();
    const onParNomeClickMk = jest.fn();
    const onMouseDireitoClickMk = jest.fn();
    const onDigitaNomeMk = jest.fn();

    const getAndCheckButtons = (): HTMLElement[] => {
        const botoesNome = screen.getAllByRole("button");
        expect(botoesNome.length).toBe(5);

        return botoesNome;
    }

    test('deve renderizar 5 nomes e invocar onParNomeClick ao clicar no 4º', async () => {
        // 1. Garantir que o número correto de nomes foi renderizado.
        // 2. Garantir que a função correta foi chamada conforme posição do nome na lista.
        // Uso obrigatório: render, expect, screen (ex.: getAllByRole), mock function, userEvent
    });

    test('deve renderizar 5 nomes e invocar onImparNomeClick ao clicar no 3º', async () => {
        // 1. Garantir que o número correto de nomes foi renderizado.
        // 2. Garantir que a função correta foi chamada conforme posição do nome na lista.
        // Uso obrigatório: render, expect, screen (ex.: getAllByRole), mock function, userEvent
    });

    test('deve renderizar 5 nomes e invocar onMouseDireitoClick ao clicar com o botão direito do mouse em qualquer item', async () => {
        // 1. Garantir que a função correta foi chamada quando 
        // o usuário clicar sobre um nome com o botão direito (contextmenu)
        // Uso obrigatório: render, expect, screen (ex.: getAllByRole), mock function, userEvent - pointer (ref: https://testing-library.com/docs/user-event/pointer)
    });

    test('deve renderizar o input de novo nome e deve invocar onDigitaNome N vezes, sendo N a quantidade de eventos do usuário', async () => {
        // 1. Garantir que a função de alteração do valor do input seja chamada corretamente no decorrer 
        // da digitação do usuário (está testando a ação de digitar e não apenas a alteração de valor)
        // Uso obrigatório: render, expect, screen (ex.: getAllByRole), mock function, userEvent (type) (ref.: https://testing-library.com/docs/user-event/utility#type)
    });

    test('deve renderizar o input de novo nome e deve invocar onDigitaNome N vezes, sendo N a quantidade de eventos do usuário: digitação de nome, apagar último caractere e depois corrigir último caractere', async () => {
        // Comportamento do usuário: Digita "Fulano da Silvs", apaga o "s" do final e digita "a"
        // 1. Garantir que a função de alteração do valor do input seja chamada corretamente no decorrer 
        // da digitação do usuário (está testando a ação de digitar e não apenas a alteração de valor)
        // Uso obrigatório: render, expect, screen (ex.: getAllByRole), mock function, userEvent (keyboard) (ref.: https://testing-library.com/docs/user-event/keyboard)
    });

    test('deve renderizar alterar o foco entre os botões dos nomes através da navegação acessível (uso de Tab e Shift + Tab)', async () => {
        // 1. Garantir que a navegação via teclado está funcionando conforme esperado, 
        // avançando e retornando na lista
        // Uso obrigatório: render, expect, screen (ex.: getAllByRole), mock function, userEvent (tab) (ref.: https://testing-library.com/docs/user-event/convenience#tab)
    });
});