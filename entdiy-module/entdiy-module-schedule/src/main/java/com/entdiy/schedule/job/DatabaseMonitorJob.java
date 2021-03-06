/**
 * Copyright © 2015 - 2017 EntDIY JavaEE Development Framework
 *
 * Site: https://www.entdiy.com, E-Mail: xautlx@hotmail.com
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package com.entdiy.schedule.job;

import com.entdiy.core.annotation.MetaData;
import com.entdiy.schedule.BaseQuartzJobBean;

import org.quartz.JobExecutionContext;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * 数据库监控统计任务（典型的Quartz集群运行模式的任务）
 */
@MetaData("数据库监控统计")
public class DatabaseMonitorJob extends BaseQuartzJobBean {

    private final static Logger logger = LoggerFactory.getLogger(DatabaseMonitorJob.class);

    @Override
    protected String executeInternalBiz(JobExecutionContext context) {
        logger.debug("Just Mock: Monitor database information running with Spring Quartz cluster mode...");
        return null;
    }

}
