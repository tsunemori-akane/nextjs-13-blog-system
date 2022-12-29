export const NoteRoutes = [
  {
    name: "JS Fundamentals",
    prefix: "/docs/fundamental",
    children: [
      {
        name: "函数闭包",
        route: "/docs/fundamental/closure",
        description: "闭包"
      },
      {
        name: "原型",
        route: "/docs/fundamental/prototype",
        description: ""
      },
      {
        name: "正则",
        route: "/docs/fundamental/regularExpression",
        description: ""
      },
    ]
  },
  {
    name: "React",
    prefix: "/docs/react",
    children: [
      {
        name: "react-router-dom",
        route: "/docs/react/react-router-dom",
        description: "路由"
      },
      {
        name: "rn",
        route: "/docs/react/rn",
        children: [
          {
            name: "rn-1",
            route: "/react/rn1",
            description: "rn1"
          },
          {
            name: "rn-2",
            route: "/react/rn2",
            description: "rn2"
          },
        ]
      },
    ]
  },
];