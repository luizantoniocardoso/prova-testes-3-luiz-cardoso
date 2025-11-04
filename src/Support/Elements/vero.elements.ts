export const VeroElements = {
    // Layout
    header: "header",
    footer: "footer",
  
    // Campos do formulário
    subjectSelect: 'select[aria-label="Selecione o Assunto"], select',
    nameInput: 'input[placeholder="Nome completo"]',
    phoneInput: 'input[placeholder="Telefone"], input[type="tel"]',
    emailInput: 'input[placeholder="E-mail"], input[type="email"]',
    cpfInput: 'input[placeholder="CPF"]',
    cityInput: 'input[placeholder="Cidade"], input[placeholder="Sua cidade"]',
    messageTextarea: 'textarea[placeholder="Sua mensagem"], textarea[placeholder="Escreva aqui..."]',
    privacyCheckbox: 'input[type="checkbox"]',
    submitButton: 'button[type="submit"], button:has-text("Enviar")',
  
    // Feedback
    successMessage: ".success-message, .wpcf7-mail-sent-ok",
    validationError: ".error-message, .wpcf7-not-valid-tip"
  };
  