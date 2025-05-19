import { sidebar } from "vuepress-theme-hope";

export default sidebar({
"/": [
    {
      text: "快速使用",
      // icon: "java", // 使用 Java 图标（确保主题支持）
      prefix: "java/", // 路径前缀
      link: "java/",  // 点击分组标题跳转到/java/
      children: "structure", // 自动生成目录结构
    }
  ]
});
