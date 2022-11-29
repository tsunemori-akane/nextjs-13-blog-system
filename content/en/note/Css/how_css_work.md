---
title: "how css work"
type: docs
weight: 1
---

- What happens to css when we load up a webpage

![what_happens_to_css.png](/note/images/css/what_happens_to_css.png)

- which one take precedence

![which_one_take_precedence.png](/note/images/css/which_one_take_precedence.png)

```css
// inline IDs Classes Elements
// (0, 0, 1, 0) 
.button{
	font-size: 20px;
	color: white;
}

//(0, 1, 2, 2)
nav#nav div.pull-right .button {
	background-color: green;
}

//(0, 0, 0, 1)
a{
	background-color: purple;
}

//(0, 1, 2, 1)
#nav a.button:hover {
	background-color: red;
}
```

根据优先级规则，最终2胜出