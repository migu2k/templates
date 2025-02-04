// Generated using "yarn build-templates"

export const meta = {
  name: "Registry",
  description:
    "The toolset to pack, ship, store, and deliver content. Docker Registry is the Open Source Registry implementation for storing and distributing container images using the OCI Distribution Specification. The goal of this project is to provide a simple, secure, and scalable base for building a large scale registry solution or running a simple private registry. It is a core library for many registry operators including Docker Hub, GitHub Container Registry, GitLab Container Registry and DigitalOcean Container Registry, as well as the CNCF Harbor Project, and VMware Harbor Registry.",
  instructions:
    "The Registry doesn't have a UI. To interact with the registry you should use the Docker CLI.",
  changeLog: [{ date: "2022-08-09", description: "first release" }],
  links: [
    { label: "Website", url: "https://hub.docker.com/_/registry" },
    { label: "Github", url: "https://github.com/distribution/distribution" },
  ],
  contributors: [
    { name: "Bedeoan Raul", url: "https://github.com/bedeoan" },
    { name: "Andrei Canta", url: "https://github.com/deiucanta" },
  ],
  schema: {
    type: "object",
    required: [
      "projectName",
      "appServiceName",
      "appServiceImage",
      "user",
      "password",
    ],
    properties: {
      projectName: { type: "string", title: "Project Name" },
      appServiceName: {
        type: "string",
        title: "App Service Name",
        default: "registry",
      },
      appServiceImage: {
        type: "string",
        title: "App Service Image",
        default: "registry:2.8.1",
      },
      user: { type: "string", title: "User", default: "admin" },
      password: { type: "string", title: "Password", default: "admin" },
    },
  },
  logo: "logo.png",
  screenshots: [],
};

export type ProjectName = string;
export type AppServiceName = string;
export type AppServiceImage = string;
export type User = string;
export type Password = string;

export interface Input {
  projectName: ProjectName;
  appServiceName: AppServiceName;
  appServiceImage: AppServiceImage;
  user: User;
  password: Password;
}
