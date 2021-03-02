module.exports = app => {
    const router = require('express').Router()
    const mongoose = require('mongoose')

    const Category = mongoose.model('Category')
    const Article = mongoose.model('Article')

    router.get('/news/init', async (req, res) => {
        const parent = await Category.findOne({
            name: '新闻分类'
        })
        const cats = await Category.find().where({
            parent: parent
        }).lean()
        const newsTitles = ["女神节来三月春，峡谷好礼迎春来", "3月2日英雄平衡性调整丨夏洛特、黄忠、孙策增强，马超降温", "3月2日全服不停机更新公告", "2月26日体验服停机更新公告", "清明主题塔后血包票选活动结果公告", "猜灯谜分壕礼，快手达人与你一起共度佳节！", "致一起峡谷过年的你！", "初一看电影，新春来峡谷！", "金牛贺岁，欢乐祥瑞~企鹅电竞王者明星主播陪您过大年啦！", "开年开好局，王者人生新春福利强势来袭", "3月2日英雄平衡性调整丨夏洛特、黄忠、孙策增强，马超降温", "3月2日全服不停机更新公告", "2月26日体验服停机更新公告", "清明主题塔后血包票选活动结果公告", "嫦娥皮肤设计大赛延期公告", "女神节来三月春，峡谷好礼迎春来", "元宵佳节至，峡谷迎春来", "新春暖意正融融，多重福利享不停", "【微信用户专属】微信小程序游戏礼品站购买兰陵王、花木兰“默契交锋”皮肤抽免单活动", "峡谷礼遇，温馨甜蜜，情人节好礼浪漫来袭", "KPL春季赛季前赛对阵公布，3月11日起每天8场比赛等你来看！", "2021K甲春季赛赛事日历与季前赛赛程公布", "2021K甲春季赛 选手大名单公布", "2021年K甲春季赛赛制公布，全新天命局机制上线", "2021年K甲春季赛新加入战队公布"]
        const newsList = newsTitles.map(title => {
            const randomCats = cats.slice(0).sort((a, b) => Math.random() - 0.5)
            return {
                categories: randomCats.slice(0, 2),
                title: title
            }
        })
        await Article.deleteMany({})
        await Article.insertMany(newsList)
        res.send(newsList)
    })

    router.get('/news/list', async (req, res) => {
        const parent = await Category.findOne({
            name: '新闻分类'
        }).populate({
            path: 'children',
            populate: {
                path: 'newsList'
            }
        }).lean()
        res.send(parent)

        // const parent = await Category.findOne({
        //     name: '新闻分类'
        // })
        // const cats = await Category.aggregate([
        //     {
        //         $match: {
        //             parent: parent._id
        //         }
        //     },
        // ])
        // res.send(cats)
    })

    app.use('/web/api', router)
}