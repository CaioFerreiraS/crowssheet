{
	users: {
		user1: {
			name: 'name',
			email: 'email',
			photo: 'photoUrl',
			token: 'token',
			courses: {
				key: 'courseKey1',
				key: 'courseKey2',
				key: 'courseKey3',
				key: 'courseKey4'
			},
			status: {
				courses_completes: 0,
				tests_completes: 0,
				total_tests: 0,
				total_results: 0,
				avatar {
					avatar1,
					achievements: {
						achievement1,
						achievement2,
						achievement3
					}
				}
			}
		}
	}

	avatars: {
		avatar1 {
			picture: 'url',
			name: 'avatar name'
		},
		avatar2 {
			picture: 'url',
			name: 'avatar name'
		}
	}

	achievements: {
		achievement1 {
			picture: 'url',
			name: 'avatar name',
			rule: 'rule' 
		},
		achievement2 {
			picture: 'url',
			name: 'avatar name',
			rule: 'rule' 
		}
	}

	leaders: {
		leader1: {
			name: 'name',
			email: 'email',
			photo: 'photoUrl',
			token: 'token',
			teams: {
				key: 'team1',
				key: 'team2',
				key: 'team3',
				key: 'team4'
			}
		}
	}

	teams: {
		team1: {
			name: 'team name',
			leader: leader1,
			courses: {
				course1: {
					title: 'title',
					description: 'description',
					image: 'url',
					classes: {
						class: {
							title: 'title',
							description: 'description',
							arquivo: 'url',
							video: 'url'
						}
					}
				}
			},
			users: {
				user1
			}
		}
	}
}