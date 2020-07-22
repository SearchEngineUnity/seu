// export function mapArticleToProps({ column, width, title, _rawBody }) {
//   return {
//     title,
//     blockContent: _rawBody,
//     colWidth: width,
//     columnCount: column,
//   };
// }

// export function mapBannerHeaderToProps({ title, image }) {
//   return {
//     title,
//     image: image.asset.fluid,
//     imageURL: image.asset.url,
//   };
// }

// export function mapCallToActionToProps({ title, intro, width, buttons }) {
//   return {
//     title,
//     subtitle: intro,
//     colWidth: width,
//     ctaButtons: buttons.map((btn = []) => {
//       if (btn.internalLink) {
//         return {
//           id: btn._key,
//           title: btn.title,
//           size: btn.size,
//           to: `/${btn.internalLink.reference.slug.current}/`,
//           borderRadius: btn.borderRadius,
//           internalLink: true,
//         };
//       }

//       if (btn.externalLink) {
//         return {
//           id: btn._key,
//           title: btn.title,
//           size: btn.size,
//           href: btn.externalLink.href,
//           borderRadius: btn.borderRadius,
//           externalLink: true,
//         };
//       }

//       return null;
//     }),
//   };
// }

// export function mapContactUsToProps({ email, address, title, width, number }) {
//   return {
//     email,
//     address,
//     title,
//     colWidth: width,
//     number,
//   };
// }

// export function mapFeatureCollectionToProps({ title, width, features, borderRadius, layout }) {
//   return {
//     title,
//     colWidth: width,
//     borderRadius,
//     layout,
//     features: features.map((feature) => ({
//       id: feature._key,
//       description: feature.description,
//       icon: feature.icon,
//       title: feature.title,
//       colWidth: feature.width,
//     })),
//   };
// }

// export function mapFormToProps({ action = '', title, width, button, formFields }) {
//   return {
//     action,
//     title,
//     colWidth: width,
//     btnRadius: button.borderRadius,
//     btnSize: button.size,
//     btnTitle: button.title,
//     formFields: formFields.map((field) => ({
//       title: field.title,
//       name: field.name,
//       placeholder: field.placeholder,
//       required: field.required || '',
//       type: field.inputType,
//       id: field._key,
//       as: field.fieldType,
//     })),
//   };
// }

// export function mapHeroToProps({ tagLine, title, image, ctaButtons }) {
//   return {
//     tagLine,
//     title,
//     image: image ? image.image.asset.fluid : '',
//     imageURL: image ? image.image.asset.url : '',
//     ctaButtons: ctaButtons.map((btn) => {
//       if (btn.internalLink) {
//         return {
//           id: btn._key,
//           borderRadius: btn.borderRadius,
//           to: `/${btn.internalLink.reference.slug.current}/`,
//           size: btn.size,
//           title: btn.title,
//           internalLink: true,
//         };
//       }

//       if (btn.externalLink) {
//         return {
//           id: btn._key,
//           borderRadius: btn.borderRadius,
//           href: btn.externalLink.href || '',
//           size: btn.size,
//           title: btn.title,
//           externalLink: true,
//         };
//       }

//       return null;
//     }),
//   };
// }

// export function mapPartnerCollectionToProps({ partners, title, width }) {
//   return {
//     title,
//     colWidth: width,
//     partners: partners.map((partner) => ({
//       image: partner.image.asset.fluid,
//       imageURL: partner.image.asset.url,
//       imageFilename: partner.image.asset.originalFilename,
//       id: partner._key,
//       title: partner.title,
//       webURL: partner.webUrl,
//     })),
//   };
// }

// export function mapTestimonialCollectionToProps({ width, title, testimonials = [], layout }) {
//   return {
//     title,
//     layout,
//     colWidth: width,
//     testimonials: testimonials.map((testimonial) => {
//       if (testimonial.image) {
//         return {
//           name: testimonial.name,
//           colWidth: testimonial.width,
//           image: testimonial.image.asset.fluid,
//           imageFilename: testimonial.image.asset.originalFilename,
//           id: testimonial._key,
//           description: testimonial.description,
//         };
//       }
//       return {
//         name: testimonial.name,
//         colWidth: testimonial.width,
//         id: testimonial._key,
//         description: testimonial.description,
//       };
//     }),
//   };
// }

export function mapGuideCardToProps({ h1, slug, excerpt, cardImage, displayDate }) {
  return {
    title: h1,
    date: displayDate,
    excerpt,
    image: cardImage?.mainImage?.image?.asset?.fluid,
    imageAlt: cardImage?.mainImage?.alt,
    imageFilename: cardImage?.mainImage?.image?.asset?.originalFilename,
    url: `/${slug.current}`,
  };
}

export function mapSeoToProps(
  { title, description, facebook, twitter, slug, noindex, nofollow, canonical, heroImage },
  siteUrl,
  type,
  mpUrl = '',
) {
  return {
    mpUrl,
    type,
    title,
    description,
    og: facebook,
    twitter,
    siteUrl,
    slug: slug.current,
    noindex,
    nofollow,
    canonical,
    heroImage,
  };
}

export function mapGuideHeroToProps({ h1, author, displayDate, heroImage }) {
  return {
    h1,
    author,
    displayDate,
    image: heroImage?.mainImage?.image?.asset?.url,
  };
}
