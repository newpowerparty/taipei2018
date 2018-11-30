// All regulations

  const childSubsidy = {
    name: '中央育兒津貼',
    agency: '衛福部',
    authority: '中央',
    childAge: ['0', '1'], 
    limit: { lessThanTaxBracket: 20 },
    excluding: ['準公共化托育', '育嬰留職停薪津貼'],
    excludingChildCare: [
    	'自己帶並申請育嬰留職停薪', 
    	'公共托育家園', 
    	'加入準公共化托育的私立托嬰中心', 
    	'加入準公共化托育的保母', 
    	'非營利幼兒園',
    	'公辦民營托嬰中心'
    ],
    subsidy: { general: 2500, medLow: 4000, low: 5000 },
    bonus: { largerThan: 3, subsidy: 1000 },
    law: '育有未滿二歲兒童育兒津貼申領作業要點',
    lawLink: 'https://www.sfaa.gov.tw/SFAA/Pages/ashx/File.ashx?FilePath=~/File/Attach/7497/File_172667.pdf'
  };

  const semiPublicChildCare = {
    name: '準公共化托育',
    agency: '衛福部',
    authority: '中央',
    childAge: ['0', '1'], 
    limit: { lessThanTaxBracket: 20 },
    excluding: ['育嬰留職停薪津貼', '中央育兒津貼'],
    excludingChildCare: [
    	'自己帶並申請育嬰留職停薪', 
    	'私立托嬰中心（未加入準公共化）', 
    	'私立幼兒園', '科系保母或結訓保母（未加入準公共化）',
    	'證照保母（未加入準公共化）',
    	'有受訓的親屬保母（交給親屬帶）',
      '無受訓的親屬保母（交給親屬帶）',
    	'自己帶',
    	'自己帶並申請育嬰留職停薪'
    ],
    subsidy: { 
      general: { '加入準公共化托育的保母': 6000, '加入準公共化托育的私立托嬰中心': 6000, '公共托育家園': 3000, '公辦民營托嬰中心': 3000, '非營利幼兒園': 3000 }, 
      medLow: { '加入準公共化托育的保母': 8000, '加入準公共化托育的私立托嬰中心': 6000, '公共托育家園': 5000, '公辦民營托嬰中心': 5000, '非營利幼兒園': 5000 }, 
      low: { '加入準公共化托育的保母': 10000, '加入準公共化托育的私立托嬰中心': 10000, '公共托育家園': 7000, '公辦民營托嬰中心': 7000, '非營利幼兒園': 7000 } },
    bonus: { largerThan: 3, subsidy: 1000 },
    law: '我國少子女化對策計畫',
    lawLink: 'https://www.ey.gov.tw/Page/448DE008087A1971/41d9f6c6-24de-49b7-9ac3-1c97c9e1cb2d'
  };

  const maternitySubsidy = {
    name: '育嬰留職停薪津貼',
    agency: '勞保局',
    authority: '中央',
    childAge: ['0', '1', '2'], 
    limit: { doubleIncome: ['yes'] },
    excluding: ['準公共化托育', '中央育兒津貼'],
    excludingChildCare: ['公辦民營托嬰中心', '公共托育家園', '非營利幼兒園'],
    requirements: ['自己帶並申請育嬰留職停薪'],
    subsidy: { 
      general: '育嬰留職停薪之當月起前6個月平均月投保薪資60％', 
      medLow: '育嬰留職停薪之當月起前6個月平均月投保薪資60％', 
      low: '育嬰留職停薪之當月起前6個月平均月投保薪資60％' },
    law: '性別工作平等法',
    lawLink: 'https://law.moj.gov.tw/LawClass/LawAll.aspx?PCode=N0030014'
  };

  const publicKindergarten = {
    name: '公幼就學補助',
    agency: '教育部',
    authority: '中央',
    childAge: ['5'], 
    excluding: [],
    requirements: ['公立幼兒園'],
    limit: { },
    subsidy: { 
      general: '全額學費(仍須負擔雜費等費用)', 
      medLow: '全額學費(仍須負擔雜費等費用)', 
      low: '全額學費(仍須負擔雜費等費用)' },
    bonus: { totalIncome: { '75':0, '50-70': Math.floor(6000 / 4.5), '30-50': Math.floor(14588 / 4.5 ), '30': Math.floor(14588 / 4.5)} },
    law: '幼兒就讀幼兒園補助辦法',
    lawLink: 'http://law.moj.gov.tw/LawClass/LawAll.aspx?PCode=H0070049'
  };

  const privateKindergarten = {
    name: '私幼就學補助',
    agency: '教育部',
    authority: '中央',
    childAge: ['5'], 
    excluding: [],
    requirements: ['私立幼兒園'],
    limit: { },
    subsidy: { 
      general: Math.floor(15000 / 6), 
      medLow: Math.floor(15000 / 6), 
      low: Math.floor(15000 / 6) },
    bonus: { totalIncome: { '75':0, '50-70': Math.floor(5000 / 6), '30-50': Math.floor(10000 / 6 ), '30': Math.floor(15000 / 6)} },
    law: '幼兒就讀幼兒園補助辦法',
    lawLink: 'http://law.moj.gov.tw/LawClass/LawAll.aspx?PCode=H0070049'
  };

  const lowIncomeKindergarten = {
    name: '中低收入戶幼兒園補助',
    agency: '教育部',
    authority: '中央',
    childAge: ['2', '3', '4', '5'],
    excluding: [],
    requirements: ['公立幼兒園', '私立幼兒園', '非營利幼兒園'],
    limit: { lowIncome: ['medLow', 'low'] },
    subsidy: { 
      general: 0, 
      medLow: Math.floor(6000 / 4.5), 
      low: Math.floor(15000 / 4.5) },
    law: '幼兒就讀幼兒園補助辦法',
    lawLink: 'http://law.moj.gov.tw/LawClass/LawAll.aspx?PCode=H0070049'
  };

  const childSubsidyTaipei = {
    name: '台北市育兒津貼',
    agency: '台北市社會局',
    authority: '台北市',
    childAge: ['0', '1', '2', '3', '4'], 
    limit: { parentLiveTaipei: ['yes'], childLiveTaipei: ['yes', 'less1'], lessThanTaxBracket: 20 },
    excluding: ['中央育兒津貼', '準公共化托育'],
    subsidy: { 
      general: 2500, 
      medLow: 2500, 
      low: 2500 },
    law: ' 臺北市育兒津貼發給自治條例',
    lawLink: 'http://www.laws.taipei.gov.tw/lawsystem/wfLaw_ArticleContent.aspx?LawID=P08H1009-20140821&RealID=08-08-1008'
  };

  const friendlyChildCareTaipei = {
    name: '台北市友善托育補助',
    agency: '台北市社會局',
    authority: '台北市',
    childAge: ['0', '1'], 
    limit: { parentLiveTaipei: ['yes'], lessThanTaxBracket: 20 },
    excluding: ['中央育兒津貼', '育嬰留職停薪津貼'],
    subsidy: { 
       general: { '加入準公共化托育的保母': 4000, '加入準公共化托育的私立托嬰中心': 4000, '公辦民營托嬰中心': 2500, '公共托育家園': 4000,  }, 
      medLow: { '加入準公共化托育的保母': 4000, '加入準公共化托育的私立托嬰中心': 4000, '公辦民營托嬰中心': 2500, '公共托育家園': 4000 }, 
      low: { '加入準公共化托育的保母': 4000, '加入準公共化托育的私立托嬰中心': 4000, '公辦民營托嬰中心': 2500, '公共托育家園': 4000 } },
    bonus: { largerThan: 2, subsidy: { '加入準公共化托育的保母': 2000, '加入準公共化托育的私立托嬰中心': 2000, '公辦民營托嬰中心': 500, '公共托育家園': 1500 }},
    law: ' 臺北市因應行政院少子化計畫補助',
    lawLink: 'https://www-ws.gov.taipei/Download.ashx?u=LzAwMS9VcGxvYWQvMzU4L3JlbGZpbGUvMTc5NjIvMzE3MTIzMi9hMDU5YjQ5Yi1mMmE0LTQ3MTgtYjVlMC05NDhjZTQ0ZjVjNGMucGRm&n=6Ie65YyX5biC5Zug5oeJ6KGM5pS%2f6Zmi5bCR5a2Q5YyW6KiI55Wr6KOc5YqpLnBkZg%3d%3d&icon=..pdf'
  };

  const assistedChildCareTaipei = {
    name: '台北市協力照顧補助',
    agency: '台北市社會局',
    authority: '台北市',
    childAge: ['0', '1', '2'], 
    limit: { parentLiveTaipei: ['yes'], lessThanTaxBracket: 20 },
    excluding: ['準公共化托育', '育嬰留職停薪津貼'],
    excludingTaipei: ['台北市育兒津貼', '台北市友善托育補助'],
    excludingChildCare: ['無受訓的親屬保母（交給親屬帶）'],
    subsidy: { 
       general: { '科系保母或結訓保母（未加入準公共化）': 2000, '有受訓的親屬保母（交給親屬帶）': 2000, '證照保母（未加入準公共化）': 3000, '私立托嬰中心（未加入準公共化）': 3000, '私立幼兒園': 3000 }, 
      medLow: { '科系保母或結訓保母（未加入準公共化）': 2000, '有受訓的親屬保母（交給親屬帶）': 2000, '證照保母（未加入準公共化）': 3000, '私立托嬰中心（未加入準公共化）': 3000, '私立幼兒園': 3000 }, 
      low: { '科系保母或結訓保母（未加入準公共化）': 2000, '有受訓的親屬保母（交給親屬帶）': 2000, '證照保母（未加入準公共化）': 3000, '私立托嬰中心（未加入準公共化）': 3000, '私立幼兒園': 3000 } },
    law: '',
    lawLink: ''
  };

  const publicKindergartenTaipei = {
    name: '台北市公幼幼兒補助',
    agency: '台北市教育局',
    authority: '台北市',
    childAge: ['5'], 
    limit: { childLiveTaipei: ['yes', 'less1'] },
    requirements: ['公立幼兒園'],
    subsidy: { 
      general: Math.floor(5543 / 4.5), 
      medLow: Math.floor(5543 / 4.5), 
      low: Math.floor(5543 / 4.5) },
    law: '臺北市幼兒就讀幼兒園補助辦法',
    lawLink: 'https://www-ws.gov.taipei/Download.ashx?u=LzAwMS9VcGxvYWQvMzQyL3JlbGZpbGUvMzY5NjcvNzA3ODUxMy9lOWY2ZDYzZS0xNmFmLTRjOWItOTNjYy05ODVjYWVkMWEzM2IucGRm&n=6Ie65YyX5biC5bm85YWS5bCx6K6A5bm85YWS5ZyS6KOc5Yqp6L6m5rOVXzEwNzA1MTDkv67mraPnmbzluIMucGRm&icon=..pdf'
  };

  const privateKindergartenTaipeiFive = {
    name: '台北市私幼幼兒補助',
    agency: '台北市教育局',
    authority: '台北市',
    childAge: ['5'],
    requirements: ['私立幼兒園'],
    limit: { childLiveTaipei: ['yes', 'less1'] },
    subsidy: { '75': Math.floor(2543 / 6), '70': Math.floor(7543 / 6), '50': Math.floor(12543 / 6 ), '30': Math.floor(12543 / 6), medLow: Math.floor(12543 / 6), low: Math.floor(12543 / 6) },
    law: '臺北市幼兒就讀幼兒園補助辦法',
    lawLink: 'https://www-ws.gov.taipei/Download.ashx?u=LzAwMS9VcGxvYWQvMzQyL3JlbGZpbGUvMzY5NjcvNzA3ODUxMy9lOWY2ZDYzZS0xNmFmLTRjOWItOTNjYy05ODVjYWVkMWEzM2IucGRm&n=6Ie65YyX5biC5bm85YWS5bCx6K6A5bm85YWS5ZyS6KOc5Yqp6L6m5rOVXzEwNzA1MTDkv67mraPnmbzluIMucGRm&icon=..pdf'
  }; // includes '非營利幼兒園'

  const privateKindergartenTaipeiThree = {
    name: '台北市私幼幼兒補助',
    agency: '台北市教育局',
    authority: '台北市',
    childAge: ['3', '4'],
    requirements: ['私立幼兒園'],
    limit: { childLiveTaipei: ['yes', 'less1'], parentLiveTaipei: ['yes', 'justOne'], lessThanTaxBracket: 20 },
    subsidy: { general: Math.floor(13660 / 6), medLow: Math.floor(13660 / 6), low: Math.floor(13660 / 6) },
    law: '臺北市幼兒就讀幼兒園補助辦法',
    lawLink: 'https://www-ws.gov.taipei/Download.ashx?u=LzAwMS9VcGxvYWQvMzQyL3JlbGZpbGUvMzY5NjcvNzA3ODUxMy9lOWY2ZDYzZS0xNmFmLTRjOWItOTNjYy05ODVjYWVkMWEzM2IucGRm&n=6Ie65YyX5biC5bm85YWS5bCx6K6A5bm85YWS5ZyS6KOc5Yqp6L6m5rOVXzEwNzA1MTDkv67mraPnmbzluIMucGRm&icon=..pdf'
  }; // includes '非營利幼兒園' for 4 yos

  const privateKindergartenTaipeiFour = {
    name: '台北市私幼幼兒補助',
    agency: '台北市教育局',
    authority: '台北市',
    childAge: ['4', '5'],
    requirements: ['非營利幼兒園'],
    limit: { childLiveTaipei: ['yes', 'less1'], parentLiveTaipei: ['yes', 'justOne'], lessThanTaxBracket: 20 },
    subsidy: { general: Math.floor(2543 / 6), medLow: Math.floor(2543 / 6), low: Math.floor(2543 / 6) },
    law: '臺北市幼兒就讀幼兒園補助辦法',
    lawLink: 'https://www-ws.gov.taipei/Download.ashx?u=LzAwMS9VcGxvYWQvMzQyL3JlbGZpbGUvMzY5NjcvNzA3ODUxMy9lOWY2ZDYzZS0xNmFmLTRjOWItOTNjYy05ODVjYWVkMWEzM2IucGRm&n=6Ie65YyX5biC5bm85YWS5bCx6K6A5bm85YWS5ZyS6KOc5Yqp6L6m5rOVXzEwNzA1MTDkv67mraPnmbzluIMucGRm&icon=..pdf'
  }; // includes '非營利幼兒園' for 4 yos


const allSubsidies = [
	childSubsidy, semiPublicChildCare, maternitySubsidy, publicKindergarten, 
	privateKindergarten, lowIncomeKindergarten, childSubsidyTaipei, 
	friendlyChildCareTaipei, assistedChildCareTaipei, publicKindergartenTaipei,
	privateKindergartenTaipeiFive, privateKindergartenTaipeiThree, privateKindergartenTaipeiFour
];

const filterSubsidy = (childCare, doubleIncome, age, taxBracket, childLiveTaipei, parentLiveTaipei, lowIncome) => {
	const resultRaw = allSubsidies
		.filter(sub => sub.childAge.includes(age))
		.filter(sub => !sub.limit.lessThanTaxBracket || taxBracket < sub.limit.lessThanTaxBracket)
		.filter(sub => !sub.limit.childLiveTaipei || sub.limit.childLiveTaipei.includes(childLiveTaipei))
		.filter(sub => !sub.limit.parentLiveTaipei || sub.limit.parentLiveTaipei.includes(parentLiveTaipei))
		.filter(sub => !sub.limit.lowIncome || sub.limit.lowIncome.includes(lowIncome))
		.filter(sub => !sub.limit.doubleIncome || sub.limit.doubleIncome.includes(doubleIncome))
		.filter(sub => !sub.excludingChildCare || !sub.excludingChildCare.includes(childCare))
		.filter(sub => !sub.requirements || sub.requirements.includes(childCare))
    
	const resultCentral = resultRaw.filter(sub => !resultRaw.find(e => sub.excluding && sub.excluding.includes(e.name)));
	const result = resultCentral.filter(sub => !resultCentral.find(e => sub.excludingTaipei && sub.excludingTaipei.includes(e.name)))

	// console.log(result);
	return result;
};

// filterSubsidy('私立幼兒園', 'yes', '4', 5, 'yes', 'yes', 'general')
