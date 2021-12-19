exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const { createRedirect } = actions;
  createRedirect({
    fromPath: '/approach',
    toPath: '/approach/vision-and-value',
    isPermanent: true
  })
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
}
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html" || stage === "develop-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /bad-module/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}