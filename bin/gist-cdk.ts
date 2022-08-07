#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { GistCdkStack } from '../lib/gist-cdk-stack';

const app = new cdk.App();
new GistCdkStack(app, 'GistCdkStack');
