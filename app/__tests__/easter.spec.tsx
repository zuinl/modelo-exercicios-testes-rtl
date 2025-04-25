import { render, screen, waitFor } from "@testing-library/react";
import { Easter } from "../easter";
import { EasterProvider } from "../context/easter-context";
import userEvent from "@testing-library/user-event";

const user = userEvent.setup();
const currentYear = new Date().getFullYear();

describe("page: Easter", () => {
    test('deve iniciar página sem valor de data e sem texto de resultado', () => {
        // Garantir que a página esteja recebendo corretamente os dados do contexto e container
        // Uso obrigatório: expect, screen, render
        // Dica: não se esqueça de renderizar o componente dentro do Provider do contexto
    });

    test('deve renderizar resultado "Everydays Easter! 🍫"', async () => {
        // Garantir que a página siga sendo atualizada corretamente conforme o usuário interage com ela
        // Uso obrigatório: expect, screen, render, waitFor, userEvent
        // Dica: não se esqueça de renderizar o componente dentro do Provider do contexto
    });

    test('deve renderizar resultado "The future promises rivers of chocolate 👀"', async () => {
        // Garantir que a página siga sendo atualizada corretamente conforme o usuário interage com ela
        // Uso obrigatório: expect, screen, render, waitFor, userEvent
        // Dica: não se esqueça de renderizar o componente dentro do Provider do contexto
    });

    test('deve renderizar resultado "The past has no chocolate 💔"', async () => {
        // Garantir que a página siga sendo atualizada corretamente conforme o usuário interage com ela
        // Uso obrigatório: expect, screen, render, waitFor, userEvent
        // Dica: não se esqueça de renderizar o componente dentro do Provider do contexto
    });
})