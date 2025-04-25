import { act, renderHook, waitFor } from "@testing-library/react";
import { useEaster } from "../use-easter";

const currentYear = new Date().getFullYear();

describe("hook: useEaster", () => {
    test('deve carregar dados - Hoje é Páscoa!', async () => {
        // 1. Garantir que os dados vão ser carregados
        // Uso obrigatório: renderHook, expect, waitFor
    });

    test('deve carregar dados - Rios de chocolate', async () => {
        // 1. Garantir que os dados vão ser carregados no momento do carregamento inicial
        // Uso obrigatório: renderHook, expect, waitFor
    });

    test('deve retornar um erro - Sem chocolate no passado', async () => {
        // 1. Garantir que os dados vão ser carregados
        // Uso obrigatório: renderHook, expect, waitFor
    });

    test('deve limpar os dados após o carregamento inicial', async () => {
        // 1. Garantir que os dados estejam limpos após o usuário solicitar
        // Uso obrigatório: renderHook, expect, waitFor, act
    });

    test('deve limpar os dados após o carregamento inicial e depois atualizá-los', async () => {
        // 1. Garantir que o usuário consiga visualizar os dados iniciais, limpá-los e depois 
        // carregá-los novamente, concluindo um ciclo completo do hook.
        // Uso obrigatório: renderHook, expect, waitFor, act
    });

    test('deve limpar os dados após o carregamento inicial e depois atualizá-los COM ERRO', async () => {
        // 1. Garantir que o usuário consiga visualizar os dados iniciais, limpá-los e depois carregá-los 
        // novamente mas com uma data diferente, que cause erro.
        // Uso obrigatório: renderHook, expect, waitFor, act, rerender (ref: https://github.com/testing-library/react-hooks-testing-library/issues/964)
    });
});