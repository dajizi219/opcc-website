# Copyright (c) 2025 Beijing Volcano Engine Technology Co., Ltd. and/or its affiliates.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

import requests
import argparse
from urllib.parse import urlparse, parse_qs, urlencode

def perror(code, error_msg):
    if (code is None):
        print(error_msg)
    else:
        print("阅读并参考`./references/接口错误指南.md，根据错误码{}进行处理`".format(code))

def simplify(url: str, keys: list) -> str:
    # 校验域名
    parsed_original = urlparse(url)
    original_domain = parsed_original.netloc
    allowed_domains = ['haohuo.jinritemai.com', 'v.douyin.com']
    
    if original_domain not in allowed_domains:
        raise ValueError(f"URL域名不支持，仅支持以下域名：{', '.join(allowed_domains)}")
    
    response = requests.head(url, allow_redirects=True)
    parsed = urlparse(response.url)
    query = {k: v for k, v in parse_qs(parsed.query).items() if k in keys}
    simplified_url = parsed._replace(query=urlencode(query, doseq=True)).geturl()
    return simplified_url

parser = argparse.ArgumentParser(description='Format Douyin URL')
parser.add_argument('url', type=str, help='The Douyin URL to format')
parser.add_argument('--format', type=str, choices=['redirect', 'simplify'], help='Format the URL')
parser.add_argument('--keys', type=str, nargs='+', help='The keys to keep in the simplified URL')
args = parser.parse_args()


if args.format == 'simplify':
    try:
        print(simplify(args.url, args.keys))
        exit(0)
    except ValueError as e:
        perror(None, f"错误: {e}")
        exit(1)
    except Exception as e:
        perror(50000, f"错误: {e}")
        exit(1)
