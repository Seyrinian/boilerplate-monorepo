const version = '${version}';
const packageName = process.env.npm_package_name;
const scope = packageName.split('/')[1];

export default {
  plugins: {
    '@release-it/conventional-changelog': {
      path: '.',
      infile: 'docs/CHANGELOG.md',
      preset: 'conventionalcommits',
      gitRawCommitsOpts: {
        path: '.',
      },
    },
  },
  git: {
    push: true,
    tagName: `${packageName}-v${version}`,
    requireCleanWorkingDir: false,
  },
  npm: {
    publish: true,
    versionArgs: ['--workspaces false'],
  },
  github: {
    release: true,
    releaseName: `${packageName}-v${version}`,
  },
  hooks: {
    'before:git:release': ['git add --all'],
  },
};
