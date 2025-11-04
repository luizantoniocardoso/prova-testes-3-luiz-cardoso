import { test } from "@playwright/test";
import { VeroPage } from "../Support/Pages/vero.page";

test.describe("Vero Internet – Página de Contato", () => {

  test("TC01 – Carregar página e verificar layout (header & footer)", async ({ page }) => {
    const vero = new VeroPage(page);
    await vero.open();
    await vero.checkLayout();
  });

  test("TC02 – Verificar visibilidade do formulário", async ({ page }) => {
    const vero = new VeroPage(page);
    await vero.open();
    await vero.checkFormVisibility();
  });

  test("TC03 – Enviar formulário: vazio & com dados", async ({ page }) => {
    const vero = new VeroPage(page);
    await vero.open();
    await vero.submitEmptyForm();
    console.log('passou esse teste')
    await vero.fillFormAndSubmit();
  });

});
