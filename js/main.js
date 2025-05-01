// 模擬資料
const leagueData = {
    cpbl: {
        teams: [
            { name: '中信兄弟', win: 0, lose: 0, draw: 0, winRate: '.000' },
            { name: '樂天桃猿', win: 0, lose: 0, draw: 0, winRate: '.000' },
            { name: '統一7-ELEVEn獅', win: 0, lose: 0, draw: 0, winRate: '.000' },
            { name: '富邦悍將', win: 0, lose: 0, draw: 0, winRate: '.000' },
            { name: '味全龍', win: 0, lose: 0, draw: 0, winRate: '.000' }
        ],
        news: []
    },
    npb: {
        teams: [
            // 央聯
            { name: '讀賣巨人', win: 0, lose: 0, draw: 0, winRate: '.000' },
            { name: '陽岱鋼老虎', win: 0, lose: 0, draw: 0, winRate: '.000' },
            { name: '廣島鯉魚', win: 0, lose: 0, draw: 0, winRate: '.000' },
            { name: '中日龍', win: 0, lose: 0, draw: 0, winRate: '.000' },
            { name: '養樂多燕子', win: 0, lose: 0, draw: 0, winRate: '.000' },
            { name: '橫濱DeNA', win: 0, lose: 0, draw: 0, winRate: '.000' },
            // 太平洋聯盟
            { name: 'Orix布牛', win: 0, lose: 0, draw: 0, winRate: '.000' },
            { name: '羅德海洋', win: 0, lose: 0, draw: 0, winRate: '.000' },
            { name: '西武獅', win: 0, lose: 0, draw: 0, winRate: '.000' },
            { name: '軟銀鷹', win: 0, lose: 0, draw: 0, winRate: '.000' },
            { name: '火腿鬥士', win: 0, lose: 0, draw: 0, winRate: '.000' },
            { name: '樂天金鷲', win: 0, lose: 0, draw: 0, winRate: '.000' }
        ],
        news: []
    },
    kbo: {
        teams: [
            { name: 'LG雙子', win: 0, lose: 0, draw: 0, winRate: '.000' },
            { name: 'KT巫師', win: 0, lose: 0, draw: 0, winRate: '.000' },
            { name: 'SSG閃電', win: 0, lose: 0, draw: 0, winRate: '.000' },
            { name: 'NC恐龍', win: 0, lose: 0, draw: 0, winRate: '.000' },
            { name: '斗山熊', win: 0, lose: 0, draw: 0, winRate: '.000' },
            { name: '起亞虎', win: 0, lose: 0, draw: 0, winRate: '.000' },
            { name: '樂天巨人', win: 0, lose: 0, draw: 0, winRate: '.000' },
            { name: '三星獅', win: 0, lose: 0, draw: 0, winRate: '.000' },
            { name: '韓華老鷹', win: 0, lose: 0, draw: 0, winRate: '.000' },
            { name: 'KIA英雄', win: 0, lose: 0, draw: 0, winRate: '.000' }
        ],
        news: []
    },
    mlb: {
        teams: [
            // 美聯
            { name: '洋基', win: 0, lose: 0, draw: 0, winRate: '.000' },
            { name: '紅襪', win: 0, lose: 0, draw: 0, winRate: '.000' },
            { name: '光芒', win: 0, lose: 0, draw: 0, winRate: '.000' },
            { name: '藍鳥', win: 0, lose: 0, draw: 0, winRate: '.000' },
            { name: '金鶯', win: 0, lose: 0, draw: 0, winRate: '.000' },
            // 國聯
            { name: '大都會', win: 0, lose: 0, draw: 0, winRate: '.000' },
            { name: '勇士', win: 0, lose: 0, draw: 0, winRate: '.000' },
            { name: '費城人', win: 0, lose: 0, draw: 0, winRate: '.000' },
            { name: '馬林魚', win: 0, lose: 0, draw: 0, winRate: '.000' },
            { name: '國民', win: 0, lose: 0, draw: 0, winRate: '.000' }
        ],
        news: []
    }
};

// 賽程資料
const scheduleData = {
    games: [
        {
            time: '2025-05-01 18:30',
            league: 'CPBL',
            homeTeam: '中信兄弟',
            awayTeam: '樂天桃猿',
            homeScore: 0,
            awayScore: 0,
            stadium: '台中洲際球場',
            status: 'upcoming'
        },
        // 其他賽程資料可以依照相同格式添加
    ]
};

// 球員數據
const playerStats = {
    batting: [
        {
            name: '林智勝',
            team: '中信兄弟',
            avg: '.345',
            hr: 15,
            rbi: 45,
            hits: 89,
            runs: 38,
            sb: 2
        },
        // 其他打者資料
    ],
    pitching: [
        {
            name: '江少慶',
            team: '富邦悍將',
            era: '2.45',
            wins: 8,
            losses: 3,
            holds: 0,
            saves: 0,
            strikeouts: 76
        },
        // 其他投手資料
    ]
};

// 球隊歷史成就
const teamHistory = {
    cpbl: {
        '中信兄弟': [
            { year: 2024, achievement: '年度總冠軍' },
            { year: 2023, achievement: '上半季冠軍' },
            // 更多成就
        ],
        // 其他球隊歷史
    },
    // 其他聯盟球隊歷史
};

// 歷史紀錄資料
const historicalRecords = {
    team: {
        cpbl: [
            { type: '單季最多勝場', team: '兄弟象', value: '82勝', year: '1994' },
            { type: '單季最長連勝', team: '統一獅', value: '17連勝', year: '2006' },
            { type: '單場最多得分', team: '兄弟象', value: '30分', year: '1999' }
        ],
        npb: [
            { type: '單季最多勝場', team: '巨人隊', value: '93勝', year: '1965' },
            { type: '連續奪冠次數', team: '巨人隊', value: '9連霸', year: '1965-1973' }
        ],
        // 其他聯盟記錄...
    },
    batting: {
        cpbl: [
            { type: '單季打擊率', player: '王柏融', team: '富邦悍將', value: '.407', year: '2017' },
            { type: '單季全壘打', player: '林智勝', team: '兄弟象', value: '39支', year: '2012' }
        ],
        npb: [
            { type: '單季安打數', player: '鈴木一朗', team: 'オリックス', value: '210支', year: '1994' },
            { type: '單季打擊率', player: '落合博滿', team: '中日龍', value: '.367', year: '1985' }
        ],
        // 其他聯盟記錄...
    },
    pitching: {
        cpbl: [
            { type: '單季勝場', player: '江泰權', team: '兄弟象', value: '22勝', year: '1994' },
            { type: '單季完投', player: '黃俊中', team: '統一獅', value: '15場', year: '1995' }
        ],
        npb: [
            { type: '單季勝場', player: '稻尾和久', team: '西鐵獅', value: '42勝', year: '1982' },
            { type: '連續無失分局', player: '杉下茂', team: '養樂多燕子', value: '52.2局', year: '1957' }
        ],
        // 其他聯盟記錄...
    }
};

// 個人獎項資料
const awards = {
    cpbl: {
        2024: [
            { award: '年度MVP', winner: '林智勝', team: '中信兄弟', stats: '打擊率.355、39轟、125打點' },
            { award: '投手王', winner: '江少慶', team: '富邦悍將', stats: '19勝4敗、防禦率2.45' }
        ],
        // 其他年份...
    },
    // 其他聯盟...
};

// 季後賽資料
const playoffData = {
    cpbl: {
        2024: {
            rounds: [
                {
                    name: '總冠軍賽',
                    series: [
                        {
                            homeTeam: '中信兄弟',
                            awayTeam: '樂天桃猿',
                            score: '4-2',
                            games: [
                                { date: '2024-10-12', home: '中信兄弟', away: '樂天桃猿', score: '5-3' }
                                // 其他比賽...
                            ]
                        }
                    ]
                }
            ]
        }
    },
    // 其他聯盟...
};

// 初始化頁面
document.addEventListener('DOMContentLoaded', () => {
    initializeLeagueContent('cpbl');
    initializeLeagueContent('npb');
    initializeLeagueContent('kbo');
    initializeLeagueContent('mlb');
    initializeSchedule();
    initializePlayerStats();
    initializeTeamHistory();
    initializeRecords();
    initializeAwards();
    initializePlayoffs();
});

// 初始化聯盟內容
function initializeLeagueContent(leagueId) {
    const content = document.getElementById(`${leagueId}-content`);
    if (!content) return;

    // 建立戰績表格
    const standingsDiv = document.createElement('div');
    standingsDiv.className = 'col-12 mb-4';
    standingsDiv.innerHTML = `
        <h3>戰績表</h3>
        <div class="table-responsive">
            <table class="table table-striped standings-table">
                <thead>
                    <tr>
                        <th>球隊</th>
                        <th>勝</th>
                        <th>敗</th>
                        <th>和</th>
                        <th>勝率</th>
                    </tr>
                </thead>
                <tbody>
                    ${leagueData[leagueId].teams.map(team => `
                        <tr>
                            <td>${team.name}</td>
                            <td>${team.win}</td>
                            <td>${team.lose}</td>
                            <td>${team.draw}</td>
                            <td>${team.winRate}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
    `;

    content.appendChild(standingsDiv);

    // 建立新聞區塊
    const newsDiv = document.createElement('div');
    newsDiv.className = 'col-12';
    newsDiv.innerHTML = `
        <h3>最新消息</h3>
        <div id="${leagueId}-news" class="news-container">
            <p class="text-muted">暫無最新消息</p>
        </div>
    `;

    content.appendChild(newsDiv);
}

// 初始化賽程表
function initializeSchedule() {
    const scheduleBody = document.getElementById('schedule-body');
    if (!scheduleBody) return;

    scheduleData.games.forEach(game => {
        const row = document.createElement('tr');
        const gameTime = new Date(game.time);
        const statusClass = game.status === 'live' ? 'live-game' : 
                          game.status === 'finished' ? 'finished-game' : 
                          'upcoming-game';

        row.innerHTML = `
            <td>${gameTime.toLocaleTimeString('zh-TW', {hour: '2-digit', minute:'2-digit'})}</td>
            <td>${game.league}</td>
            <td>${game.homeTeam}</td>
            <td class="${statusClass}">${game.homeScore} - ${game.awayScore}</td>
            <td>${game.awayTeam}</td>
            <td>${game.stadium}</td>
            <td class="${statusClass}">${
                game.status === 'live' ? '進行中' :
                game.status === 'finished' ? '已結束' :
                '即將開始'
            }</td>
        `;
        scheduleBody.appendChild(row);
    });

    // 初始化 DataTable
    $('#schedule-table').DataTable({
        language: {
            url: 'https://cdn.datatables.net/plug-ins/1.13.6/i18n/zh-HANT.json'
        },
        order: [[0, 'asc']],
        pageLength: 10
    });
}

// 初始化球員數據
function initializePlayerStats() {
    const battingStats = document.getElementById('batting-stats');
    const pitchingStats = document.getElementById('pitching-stats');

    if (battingStats) {
        playerStats.batting.forEach(player => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${player.name}</td>
                <td>${player.team}</td>
                <td>${player.avg}</td>
                <td>${player.hr}</td>
                <td>${player.rbi}</td>
                <td>${player.hits}</td>
                <td>${player.runs}</td>
                <td>${player.sb}</td>
            `;
            battingStats.appendChild(row);
        });
    }

    if (pitchingStats) {
        playerStats.pitching.forEach(player => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${player.name}</td>
                <td>${player.team}</td>
                <td>${player.era}</td>
                <td>${player.wins}</td>
                <td>${player.losses}</td>
                <td>${player.holds}</td>
                <td>${player.saves}</td>
                <td>${player.strikeouts}</td>
            `;
            pitchingStats.appendChild(row);
        });
    }

    // 初始化 DataTables
    $('#batting-table').DataTable({
        language: {
            url: 'https://cdn.datatables.net/plug-ins/1.13.6/i18n/zh-HANT.json'
        }
    });
    $('#pitching-table').DataTable({
        language: {
            url: 'https://cdn.datatables.net/plug-ins/1.13.6/i18n/zh-HANT.json'
        }
    });
}

// 初始化球隊歷史
function initializeTeamHistory() {
    const accordion = document.getElementById('teamHistoryAccordion');
    if (!accordion) return;

    let accordionHTML = '';
    Object.entries(teamHistory).forEach(([league, teams], leagueIndex) => {
        accordionHTML += `
            <div class="accordion-item team-history-card">
                <h2 class="accordion-header" id="heading${league}">
                    <button class="accordion-button ${leagueIndex === 0 ? '' : 'collapsed'}" 
                            type="button" 
                            data-bs-toggle="collapse" 
                            data-bs-target="#collapse${league}">
                        ${getLeagueName(league)}
                    </button>
                </h2>
                <div id="collapse${league}" 
                     class="accordion-collapse collapse ${leagueIndex === 0 ? 'show' : ''}" 
                     data-bs-parent="#teamHistoryAccordion">
                    <div class="accordion-body">
                        ${Object.entries(teams).map(([team, achievements]) => `
                            <div class="team-achievements mb-4">
                                <h4>${team}</h4>
                                <ul class="achievement-list">
                                    ${achievements.map(achievement => `
                                        <li>
                                            <span class="achievement-year">${achievement.year}</span>
                                            ${achievement.achievement}
                                        </li>
                                    `).join('')}
                                </ul>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    });

    accordion.innerHTML = accordionHTML;
}

// 初始化歷史紀錄
function initializeRecords() {
    const tables = {
        team: document.getElementById('team-records-body'),
        batting: document.getElementById('batting-records-body'),
        pitching: document.getElementById('pitching-records-body')
    };

    Object.entries(historicalRecords).forEach(([category, leagues]) => {
        const table = tables[category];
        if (!table) return;

        Object.entries(leagues).forEach(([league, records]) => {
            records.forEach(record => {
                const row = document.createElement('tr');
                if (category === 'team') {
                    row.innerHTML = `
                        <td>${record.type}</td>
                        <td>${getLeagueName(league)}</td>
                        <td>${record.team}</td>
                        <td class="record-value">${record.value}</td>
                        <td class="record-year">${record.year}</td>
                    `;
                } else {
                    row.innerHTML = `
                        <td>${record.type}</td>
                        <td>${getLeagueName(league)}</td>
                        <td>${record.player}</td>
                        <td>${record.team}</td>
                        <td class="record-value">${record.value}</td>
                        <td class="record-year">${record.year}</td>
                    `;
                }
                table.appendChild(row);
            });
        });
    });

    // 初始化 DataTables
    ['team-records-table', 'batting-records-table', 'pitching-records-table'].forEach(tableId => {
        $(`#${tableId}`).DataTable({
            language: {
                url: 'https://cdn.datatables.net/plug-ins/1.13.6/i18n/zh-HANT.json'
            },
            order: [[1, 'asc'], [0, 'asc']]
        });
    });
}

// 初始化獎項資料
function initializeAwards() {
    const yearSelect = document.getElementById('award-year');
    const leagueSelect = document.getElementById('award-league');
    const tbody = document.getElementById('awards-body');

    function updateAwards() {
        const year = yearSelect.value;
        const league = leagueSelect.value;
        
        if (!awards[league] || !awards[league][year]) {
            tbody.innerHTML = '<tr><td colspan="4" class="text-center">無資料</td></tr>';
            return;
        }

        tbody.innerHTML = awards[league][year]
            .map(award => `
                <tr>
                    <td>${award.award}</td>
                    <td class="award-winner">${award.winner}</td>
                    <td>${award.team}</td>
                    <td>${award.stats}</td>
                </tr>
            `)
            .join('');
    }

    yearSelect.addEventListener('change', updateAwards);
    leagueSelect.addEventListener('change', updateAwards);
    updateAwards();
}

// 初始化季後賽資料
function initializePlayoffs() {
    const yearSelect = document.getElementById('playoff-year');
    const leagueSelect = document.getElementById('playoff-league');
    const bracketDiv = document.getElementById('playoff-bracket');
    const gamesBody = document.getElementById('playoff-games-body');

    function updatePlayoffs() {
        const year = yearSelect.value;
        const league = leagueSelect.value;

        if (!playoffData[league] || !playoffData[league][year]) {
            bracketDiv.innerHTML = '<p class="text-center">無資料</p>';
            gamesBody.innerHTML = '<tr><td colspan="7" class="text-center">無資料</td></tr>';
            return;
        }

        // 更新季後賽對戰圖
        const rounds = playoffData[league][year].rounds;
        bracketDiv.innerHTML = rounds
            .map(round => `
                <div class="playoff-round">
                    <h4>${round.name}</h4>
                    ${round.series.map(series => `
                        <div class="playoff-matchup">
                            <div class="playoff-team ${series.score.startsWith('4') ? 'playoff-winner' : ''}">${series.homeTeam}</div>
                            <div class="playoff-team ${series.score.endsWith('4') ? 'playoff-winner' : ''}">${series.awayTeam}</div>
                            <div class="playoff-series-status">${series.score}</div>
                        </div>
                    `).join('')}
                </div>
            `)
            .join('');

        // 更新比賽列表
        const allGames = rounds.flatMap(round => 
            round.series.flatMap(series => 
                series.games.map(game => ({
                    ...game,
                    round: round.name
                }))
            )
        );

        gamesBody.innerHTML = allGames
            .map(game => `
                <tr>
                    <td>${game.date}</td>
                    <td>${game.round}</td>
                    <td>${game.home}</td>
                    <td>${game.score}</td>
                    <td>${game.away}</td>
                    <td>${game.stadium || '-'}</td>
                    <td>
                        <button class="btn btn-sm btn-primary" onclick="showGameDetails('${game.date}', '${game.home}', '${game.away}')">
                            詳細
                        </button>
                    </td>
                </tr>
            `)
            .join('');
    }

    yearSelect.addEventListener('change', updatePlayoffs);
    leagueSelect.addEventListener('change', updatePlayoffs);
    updatePlayoffs();
}

// 顯示比賽詳細資訊
function showGameDetails(date, home, away) {
    alert(`${date} ${home} vs ${away}\n詳細資訊功能開發中`);
}

// 輔助函數：取得聯盟名稱
function getLeagueName(league) {
    const leagueNames = {
        cpbl: '中華職棒',
        npb: '日本職棒',
        kbo: '韓國職棒',
        mlb: '美國職棒'
    };
    return leagueNames[league] || league;
}

// 更新戰績函數
function updateStandings(leagueId, teamName, win, lose, draw) {
    const team = leagueData[leagueId].teams.find(t => t.name === teamName);
    if (team) {
        team.win = win;
        team.lose = lose;
        team.draw = draw;
        team.winRate = (win / (win + lose)).toFixed(3).replace(/^0/, '');
        initializeLeagueContent(leagueId);
    }
}

// 新增新聞函數
function addNews(leagueId, title, content, date) {
    leagueData[leagueId].news.unshift({
        title,
        content,
        date: date || new Date().toLocaleDateString()
    });
    updateNews(leagueId);
}

// 更新新聞顯示
function updateNews(leagueId) {
    const newsContainer = document.getElementById(`${leagueId}-news`);
    if (!newsContainer) return;

    if (leagueData[leagueId].news.length === 0) {
        newsContainer.innerHTML = '<p class="text-muted">暫無最新消息</p>';
        return;
    }

    newsContainer.innerHTML = leagueData[leagueId].news
        .map(news => `
            <div class="news-item">
                <h5>${news.title}</h5>
                <p>${news.content}</p>
                <small class="text-muted">${news.date}</small>
            </div>
        `)
        .join('');
}

// 更新賽程函數
function updateGameStatus(gameId, homeScore, awayScore, status) {
    const game = scheduleData.games.find(g => g.id === gameId);
    if (game) {
        game.homeScore = homeScore;
        game.awayScore = awayScore;
        game.status = status;
        initializeSchedule();
    }
}

// 更新球員數據函數
function updatePlayerStats(playerId, stats) {
    // 根據球員類型（打者/投手）更新相應數據
    const player = playerStats.batting.find(p => p.id === playerId) || 
                  playerStats.pitching.find(p => p.id === playerId);
    if (player) {
        Object.assign(player, stats);
        initializePlayerStats();
    }
}