function ContactForm() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto max-w-md">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-700">
          Entre em contato
        </h2>
        <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-violet-400">
          <form className="space-y-4">
            <div>
              <label
                htmlFor="nome"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Nome
              </label>
              <input
                type="text"
                id="nome"
                placeholder="Seu nome"
                className="w-full px-3 py-2 border rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-violet-400 focus:border-violet-400"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                E-mail
              </label>
              <input
                type="email"
                id="email"
                placeholder="Seu e-mail"
                className="w-full px-3 py-2 border rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-violet-400 focus:border-violet-400"
              />
            </div>
            <div>
              <label
                htmlFor="Mensagem"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Mensagem
              </label>
              <textarea
                id="mensagem"
                placeholder="Sua mensagem"
                className="w-full px-3 py-2 border rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-violet-400 focus:border-violet-400"
              />
            </div>
            <button
              type="submit"
              className="mt-4 w-full bg-violet-500 text-white px-4 py-2 rounded-md hover:bg-violet-600"
            >
              Enviar mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
