module.exports = {
  //  user only
  persona: {
    'post',
    'gathering',
    'about',
    'private',
    'claims',
    'blog',
    'micro',
    'meta-feeds'
  }
  claims: [
    'talenet-identity-skill_assignment',
    'talenet-skill-create',
    'talenet-idea-association',
    'talenet-skill-similarity',
  ]

  // all non private
  'social-network': [
    'scat_message',
    'post',
    'about',
    'vote',
    'meta-feeds',
    'tag',
    'blog',
    'micro',
  ]

  'meta-feeds': [
    'contact',
    'channel',
    'share',
    'about',
    'curation',
  ]

  network: [
  'pub',
  'legacy',
  'ssb-dns',

  ]

  chess: [
    'chess_move',
    'chess_invite_accept',
    'chess_invite',
    'chess_game_end',
    'chess_chat',
  ],

  npm: [
  'npm-packages',
  'npm-prebuilds',
  ],

  git: [
    'git-repo',
    'git-update',
    'issue',
    'pull-request',
    'issue-edit',
  ],

    // todo: (remove comment when completed)
    // guessing this is legacy given the frequency should check in with @happy0 about this
  legacy: [
    'ssb_chess_invite_accept',
    'ssb_chess_invite',
    'ssb_chess_move',
    'ssb_chess_game_end',
    'flag',
  ],
  'ssb-mutual': [
  'mutual/credit',
  'mutual/account',
  ],
}