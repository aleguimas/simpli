import { defineType } from 'sanity'

export const seo = defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  description: 'Configurações de SEO para busca e redes sociais. Deixe em branco para usar título e resumo do conteúdo.',
  fields: [
    {
      name: 'metaTitle',
      title: 'Título (meta / SEO)',
      type: 'string',
      description: 'Título para motores de busca e redes sociais. Ideal até 60 caracteres.',
      validation: (Rule) => Rule.max(70).warning('Títulos longos podem ser cortados nos resultados de busca.'),
    },
    {
      name: 'metaDescription',
      title: 'Descrição (meta / SEO)',
      type: 'text',
      rows: 3,
      description: 'Resumo para resultados de busca e preview em redes. Ideal entre 120 e 160 caracteres.',
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
      name: 'ogImage',
      title: 'Imagem para redes sociais (Open Graph)',
      type: 'image',
      description: 'Imagem exibida ao compartilhar o link. Recomendado: 1200x630px. Se não definir, usa a imagem principal.',
      options: {
        hotspot: true,
      },
    },
  ],
  options: {
    collapsible: true,
    collapsed: false,
  },
})
