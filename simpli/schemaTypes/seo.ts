import { defineType } from 'sanity'

export const seo = defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  description:
    'Configurações de SEO para busca e redes sociais. Deixe em branco para usar título e resumo do conteúdo.',
  fields: [
    {
      name: 'metaTitle',
      title: 'Título (meta / SEO)',
      type: 'string',
      description: 'Título para motores de busca e redes sociais. Ideal até 60 caracteres.',
      validation: (Rule) =>
        Rule.max(70).warning('Títulos longos podem ser cortados nos resultados de busca.'),
    },
    {
      name: 'metaDescription',
      title: 'Descrição (meta / SEO)',
      type: 'text',
      rows: 3,
      description:
        'Resumo para resultados de busca e preview em redes. Ideal entre 120 e 160 caracteres.',
      validation: (Rule) =>
        Rule.max(160).warning('Descrições longas podem ser cortadas nos resultados de busca.'),
    },
    {
      name: 'metaKeywords',
      title: 'Palavras-chave',
      type: 'string',
      description: 'Palavras-chave separadas por vírgula (opcional).',
    },
    {
      name: 'canonical',
      title: 'URL canônica',
      type: 'string',
      description:
        'URL canônica absoluta (ex.: https://www.simpli.ia.br/conteudo/meu-post). Deixe em branco para usar a URL padrão do post.',
    },
    {
      name: 'noindex',
      title: 'Noindex',
      type: 'boolean',
      description: 'Se ativo, pede aos buscadores para não indexar esta página.',
      initialValue: false,
    },
    {
      name: 'nofollow',
      title: 'Nofollow',
      type: 'boolean',
      description: 'Se ativo, pede aos buscadores para não seguir os links desta página.',
      initialValue: false,
    },
    {
      name: 'ogTitle',
      title: 'Título Open Graph / redes sociais',
      type: 'string',
      description: 'Título específico para compartilhamento (WhatsApp, Facebook, etc.). Se vazio, usa o título meta.',
    },
    {
      name: 'ogDescription',
      title: 'Descrição Open Graph / redes sociais',
      type: 'text',
      rows: 2,
      description: 'Descrição específica para compartilhamento. Se vazia, usa a descrição meta.',
    },
    {
      name: 'ogImage',
      title: 'Imagem para redes sociais (Open Graph)',
      type: 'image',
      description:
        'Imagem exibida ao compartilhar o link. Recomendado: 1200x630px. Se não definir, usa a imagem principal.',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'faq',
      title: 'FAQ (perguntas frequentes)',
      type: 'array',
      description: 'Perguntas e respostas para schema FAQ (opcional).',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'pergunta', title: 'Pergunta', type: 'string', validation: (Rule) => Rule.required() },
            { name: 'resposta', title: 'Resposta', type: 'text', rows: 3, validation: (Rule) => Rule.required() },
          ],
          preview: {
            select: { title: 'pergunta' },
            prepare({ title }) {
              return { title: title || 'Pergunta' }
            },
          },
        },
      ],
    },
  ],
  options: {
    collapsible: true,
    collapsed: false,
  },
})
